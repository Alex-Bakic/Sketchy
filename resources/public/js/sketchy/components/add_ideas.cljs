(ns sketchy.components.add-ideas
   (:require [reagent.core :as r]
             [re-frame.core :as rf]))

;; this file will specify all the components that a user will
;; need for adding an idea to the db. Which is an input field 
;; and a button

;; the input field and button

(defn add-idea []
  (let [val (r/atom "")
        id (rf/subscribe [:last-id])]
    ;; if you're using let forms to define data, you need to return a render fn
    (fn []
      [:div {:class "row "}
        [:div {:class "col-lg-6"} 
         [:div {:class "input-group input-group-lg input-container "}
           [:input {:type "text"
                    :class "form-control add-idea"
                    :placeholder "save something!"
                    :value @val
                    :on-change #(reset! val (-> % .-target .-value))}]
           [:button {:class "btn btn-default" 
                     :on-click #(rf/dispatch [:add-idea (inc @id) @val])}
             [:i {:class "far fa-lightbulb"}]]]]])))

