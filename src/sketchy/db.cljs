(ns sketchy.db 
  (:require [re-frame.core :as rf]
            [alandipert.storage-atom :refer [local-storage]]))

;; local-storage
(def ^:private db (local-storage (atom []) :db))

;; each entry in the vector will be a map of the form:
;; {:idea "something..." :comments [] :rating 0}
(rf/reg-event-db
  :initialise
  (fn [_ _]
    []))

;; Adding the functionality which adds things to our 
