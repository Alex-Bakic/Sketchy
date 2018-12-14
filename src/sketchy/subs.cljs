(ns sketchy.subs
  (:require [re-frame.core :as rf]))

;; db is an atom, so needs to be dereferenced , which would yield
;; [{:idea "" :comments [] :keywords []}]

;; monitors the ideas array, for any insertions or deletions
(rf/reg-sub
  :ideas
  (fn [db _]
    (mapv :idea @db)))

