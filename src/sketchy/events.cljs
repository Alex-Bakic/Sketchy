(ns sketchy.events 
  (:require [reagent.core :as r]
            [re-frame.core :as rf]))

;;
;; ADDING AN IDEA
;; 

;;add some text in case the user does not add anything to the db
(defn any-idea? [i]
  (if (= "" i) [:span "You can think of" [:b " something"] "!"] i))

;; add idea with no comments and no rating initially
(rf/reg-event-db
  :add-idea
  (fn [db [_ idea]]
    (swap! db conj {:idea (any-idea? idea) :comments [] :keywords []})))

;;
;; REMOVING AN IDEA
;;

;; need a handler to remove an idea from the vector
(defn remove-idea
  [is i]
  (filterv (complement #(= i (:idea %))) is))

(rf/reg-event-db
  :remove-idea
  (fn [db [_ idea]]
    (swap! db remove-idea idea)))

;;
;; ADDING A COMMENT
;; 

;; as the button to add a comment will be with the component that 
;; renders a given idea, it can pass it along to this fn to add the
;; comment to the corresponding map

(defn inserting-comment
  [m c]
  (assoc m :comments (conj (:comments m) c)))
