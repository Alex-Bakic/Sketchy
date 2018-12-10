(ns sketchy.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]))

;; first we need to define the db and the application state
(rf/reg-event-db
  :initialise
  (fn [_ _]
    {:ideas []}))

;
;; -- Event handlers
;

;; need a handler to specify adding the idea
(rf/reg-event-db
  :add-idea
  (fn [db [_ idea]]
    (update-in db [:ideas] conj idea)))

;; need a handler to remove an idea from the list too
(defn remove-idea
  [is i]
  (filterv (complement #(= % i)) is))

(rf/reg-event-db
  :remove-idea
  (fn [db [_ idea]]
    (update-in db [:ideas] remove-idea idea)))

;  
;; -- End of event handlers
;

;
;; -- Subscriptions
;

;; monitors the ideas array, for any insertions or deletions
(rf/reg-sub
  :ideas
  (fn [db _]
    (:ideas db)))

; 
;; -- End of subscriptions
;

;
;; -- Views
;

(defn pull-all-ideas [ideas]
  [:p 
   (for [i ideas ] i)])

(defn add-idea-btn []
  (let [val (r/atom "")]
    [:div#add-ideas
     [:input {:type "text"
              :placeholder "add an idea"
              :value @val
              :on-change #(reset! val (-> % .-target .-value))}]
     [:button {:on-click (rf/dispatch [:add-idea @val])}
       "Add idea"]]))

(defn ui []
  [:div#app 
   [add-idea-btn]
   [:span 
    [pull-all-ideas @(rf/subscribe [:ideas])]]])

;
;; -- End of views
;
(defn ^:export start []
  (rf/dispatch-sync [:initialise])
  (r/render [ui] (.getElementById js/document "root")))

