(ns sketchy.db 
  (:require [re-frame.core :as rf]
            [alandipert.storage-atom :refer [local-storage]]))


;; local-storage
(def db (local-storage (atom []) :db))


;; Adding the functionality to take the ideas from each event
;; handler and push them into local-storage after it's run.
(defn ideas->storage
  [ideas]
  (swap! db conj ideas))

(defn remove-idea
  [is i]
  (filterv (complement #(= i (:idea %))) is))

(defn storage->trash
  [idea]
  (swap! db remove-idea idea))
;; Adding the functionality to take things from local-storage 
;; into  our in-memory db and vice versa using interceptors

;; Take what was in local-storage and add it into the cofx map
(rf/reg-cofx
  :local-store-ideas
  (fn [cofx _]
    ;; put all the ideas into the cofx map under the key
    ;; :local-store-ideas
    (assoc cofx :local-store-ideas @db)))


