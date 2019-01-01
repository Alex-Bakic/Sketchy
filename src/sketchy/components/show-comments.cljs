(ns sketchy.components.show-comments
  (:require [sketchy.components.add-comments :refer [add-comment]]
            [re-frame.core :refer [dispatch subscribe]]))

;; just do a simple list for now, with each comment being a list item.
(defn show-comment [id comment]
   [:li {:class "list-group-item"} 
     [:b {:class "comments"} [:h5 (str comment " ")]]
     [:button {:class "btn btn-default"
               :on-click #(dispatch [:remove-comment id comment])} 
       [:i {:class "fas fa-minus"}]]])

;; show the list with every list item
(defn show-all-comments [id]
  (let [comments (subscribe [:comments id])] 
    [:div {:class "card-body"}
      (into [:ul {:class "list-group"} [add-comment id]] 
            (for [comment @comments] [show-comment id comment]))]))
