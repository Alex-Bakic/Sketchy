(ns sketchy.subs
  (:require [re-frame.core :as rf]))

;; db is an atom, so needs to be dereferenced , which would yield
;; [{:idea "" :comments [] :keywords []}]

;; monitors the ideas array, for any insertions or deletions
(rf/reg-sub
  :ideas
  (fn [db _]
    (mapv :idea db)))

;; given the idea , return the comments array
(rf/reg-sub
  :comments
  (fn [db [_ idea]]
     (first (for [m db :let [i (:idea m) c (:comments m)] :when (= i idea)] c))))

;; given the idea , return the keywords array
(rf/reg-sub
  :keywords
   (fn [db [_ idea]]
     (first (for [m db :let [i (:idea m) k (:keywords m)] :when (= i idea)] k))))

(comment

 "Example map for event handlers and subscriptions to manipulate"
 (def ideas [
             {:idea "Hello" :comments ["Sup" "Bonsoir"] :keywords []}
             {:idea "Bonsoir" :comments ["Speak english mate" "Bonjour" :keywords []]}
             {:idea "Ello ello" :comments ["Oi oi" "Oggy oggy"] :keywords []}]))
