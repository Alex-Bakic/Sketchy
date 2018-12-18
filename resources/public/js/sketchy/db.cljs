(ns sketchy.db 
  (:require [cljs.reader]
            [re-frame.core :as rf]
            [alandipert.storage-atom :refer [local-storage]]))

(def ls-key "db")                 
;; localstore key

(defn ideas->storage
  [ideas]
  (.setItem js/localStorage ls-key (str ideas))) 
  ;; written as an EDN map

(rf/reg-cofx
  :local-store-ideas
  (fn [cofx _]
      ;; put the localstore todos into the coeffect 
      ;; under :local-store-todos
      (assoc cofx :local-store-ideas
             ;; read in todos from localstore
             ;; and process into a sorted map
             (into []
                   (some->> (.getItem js/localStorage ls-key)
                            (cljs.reader/read-string))))))
