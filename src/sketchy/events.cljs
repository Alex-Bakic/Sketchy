(ns sketchy.events
  (:require [sketchy.db :as d] 
            [reagent.core :as r]
            [re-frame.core :as rf]))

(enable-console-print!)

;;
;; APP STATE
;;

;; each entry in the vector will be a map of the form:
;; {:idea "something..." :comments [] :keywords []}
(rf/reg-event-fx
  :initialise

  ;; injecting the local-storage , put into the :cofx arg
  [(rf/inject-cofx :local-store-ideas)]
  ;; must take out the db to get out the second key, could
  ;; of done _ for the db but it is more readable
  (fn [{:keys [db local-store-ideas]} _]
    {:db local-store-ideas}))

;;
;; INTERCEPTORS
;;

;; will update the storage with every event handler operation
;; update includes showing the insertion/deletion of items in the db
(def ->storage (rf/after d/ideas->storage))

;;
;; EVENT HANDLERS
;;

;;increment the last id to add new ideas
(defn inc-id [db]
  (inc (last (keys db))))

;; adding an idea to the db
(rf/reg-event-db
  :add-idea
  [->storage]
  (fn [db [_ id idea]]
    (assoc db id {:idea idea :comments [] :keywords []})))

  ;; remove an idea given the id 
  (rf/reg-event-db
   :remove-idea
   [->storage]
   (fn [db [_ id]]
     (dissoc db id)))

;; add a comment to the db given the id and the data
(rf/reg-event-db
  :add-comment
  [->storage]
  (fn [db [_ id comment]]
    (update-in db [id :comments] conj comment)))

;; find the comment out of the vector and remove it
(defn delete-item
  [db meta-data]
  (filterv (complement #(= % meta-data)) db))

;; remove a comment from the db given the id and the data
(rf/reg-event-db
  :remove-comment
  [->storage]
  (fn [db [_ id comment]]
     (update-in db [id :comments] delete-item comment)))

;; add a keyword to the db given the id and the data
(rf/reg-event-db
  :add-keyword
  [->storage]
  (fn [db [_ id kw]]
    (update-in db [id :keywords] conj kw)))

;; remove a keyword from the db given the id and the data
(rf/reg-event-db
  :remove-keyword
  [->storage]
  (fn [db [_ id kw]]
    (update-in db [id :keywords] delete-item kw)))
