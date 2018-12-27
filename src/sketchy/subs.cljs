(ns sketchy.subs 
  (:require [re-frame.core :refer [reg-sub subscribe]]))

;; subscription to get a map given the id
;; other subscriptions can actually use subscriptions
;; to simplify the computations of finding specific information
;; so this is the sub that keeps the last id, so no other sub
;; has to keep doing the computation. If it changes then other
;; subs are notified and will update accordingly.
(reg-sub
  :last-id
  (fn [db [_ _]]
    (last (keys db))))

(reg-sub 
  :db
  (fn [db [_ _]]
    db))

(reg-sub
  :ideas
  (fn [query-v _]
    [(subscribe [:db])
     (subscribe [:last-id])])
  (fn [[db last-id] _]
    ;; as range is start inclusive end exclusive
    (for [id (range 0 (inc last-id))] (get-in db [id :idea]))))

(reg-sub
  :comments 
  (fn [db [_ id]]
    (get-in db [id :comments])))

(reg-sub
  :keywords
  (fn [db [_ id]]
    (get-in db [id :keywords])))

