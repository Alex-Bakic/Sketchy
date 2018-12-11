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

;; need a handler to remove an idea from the vector too
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
(defn new-idea []
  (let [val (r/atom "")]
    (fn []
      [:div#new-idea
       [:input {:type "text"
                :placeholder "Enter some ideas you have"
                :value @val
                :on-change #(reset! val (-> % .-target .-value))}]
       [:button {:class "btn btn-default" 
                 :on-click #(rf/dispatch [:add-idea @val])}
        "Add"]])))

(defn show-idea [i]
  [:p
   [:span i]
   [:button  {:class "btn btn default" :on-click #(rf/dispatch [:remove-idea i])} 
    "Delete"]])

(defn ui [db]
  [:div#ideas-list
   [:h3 "All of your ideas"]
   [new-idea]
   [:ul
    (for [i @db]
      [show-idea i])]])
;
;; -- End of views
;
(defn ^:export start []
  (rf/dispatch-sync [:initialise])
  (r/render [ui (rf/subscribe [:ideas])] (.getElementById js/document "root")))

