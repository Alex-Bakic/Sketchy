(ns sketchy.events 
  (:require [sketchy.db :as d]
            [reagent.core :as r]
            [re-frame.core :as rf]))

;;
;; APP STATE
;;

;; each entry in the vector will be a map of the form:
;; {:idea "something..." :comments [] :keywords []}
(rf/reg-event-fx
  :initialise

  ;; injecting the local-storage , put into the :cofx arg
  [(rf/inject-cofx :local-store-ideas)]
  
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

;; ADDING AN IDEA
 
;;add some text in case the user does not add anything to the db
(defn any-idea? [i]
  (if (= "" i) [:span "You can think of" [:b " something"] "!"] i))

;; add idea with no comments and no rating initially
(rf/reg-event-db
  :add-idea
  [->storage]
  (fn [db [_ idea]]
    (conj db {:idea (any-idea? idea) :comments [] :keywords []})))

;; REMOVING AN IDEA

;; need a handler to remove an idea from the vector
(defn remove-idea
  [is i]
  (filterv (complement #(= i (:idea %))) is))

(rf/reg-event-db
  :remove-idea
  [->storage]
  (fn [db [_ idea]]
    (remove-idea db idea)))

;;
;; ADDING A COMMENT OR KEYWORD , WRAPPER FNS
;; 

;; generic fns for both comments and keywords
(defn finding-index [db idea]
  (.indexOf db 
           (first (filterv #(= (:idea %) idea) db))))

;; generic fn , otherwise violating DRY rule
(defn update-ideas [db idea k f v]
   (update-in db [(finding-index db idea) k] f v))

;;
;; ADD A COMMENT
;;

;; given the db , idea and comment 
;; add to that particular vector
(rf/reg-event-db
  :add-comment
  [->storage]
  (fn [db [_ idea comment]]
    (update-ideas db idea :comments conj comment)))

;;
;; REMOVE COMMENT
;;


;;
;; ADDING A KEYWORD
;;

;; given the db , idea and keywords 
;; add to that particular vector
(rf/reg-event-db
  :add-keyword
  [->storage]
  (fn [db [_ idea kw]]
    (update-ideas db idea :keywords conj kw)))


