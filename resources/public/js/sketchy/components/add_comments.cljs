(ns sketchy.components.add-comments
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]))

;; it will be the first element in the list group , 
;; being the "active" list item where there is an input
;; box to add, following similar mechanisms to the add
;; keywords functionality.

(defn add-comment [id]
   (let [val (r/atom "")] 
     (fn [id]
         [:li {:class "list-group-item active"}
           [:p {:class "list-group-item-text"}]
           [:div {:class "row"}
            [:div {:class "col-lg-6"}
             [:div {:class "input-group"}
              [:input {:type "text"
                       :class "form-control"
                       :placeholder "Add a comment"
                       :value @val
                       :on-change #(-> % .-target .-value)}]
              [:span {:class "input-group-btn"}
               [:button {:class "btn btn-info"
                         :type "button"
                         :on-click #(dispatch [:add-comment id @val])}
                [:i {:class "far fa-comment"}]]]]]]])))
