(ns sketchy.components.show-comments
  (:require [re-frame.core :as rf]))

(defn show-comment [c]
  [:p
   [:span c]
   [:button  {:class "btn btn-default" :on-click #(rf/dispatch [:remove-idea c])} 
    "Delete"]])

(defn show-all-comments []
 (let [db (rf/subscribe [:comments])] 
   [:ul (into [:div#comments-list] 
              (for [c @db] (show-comment c)))]))
