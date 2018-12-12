(ns sketchy.events 
  (:require [re-frame.core :as rf]))

;; app state
(rf/reg-event-db
  :initialise
  (fn [_ _]
    {:ideas []}))

;; need a handler to specify adding the idea
(rf/reg-event-db
  :add-idea
  (fn [db [_ idea]]
    (update-in db [:ideas] conj idea)))

;; need a handler to remove an idea from the vector too
(defn remove-idea
  [is i]
  (filterv (complement #(= % i)) is))

(rf/reg-event-db
  :remove-idea
  (fn [db [_ idea]]
    (update-in db [:ideas] remove-idea idea)))
