(ns sketchy.components.show-ideas
  (:require [re-frame.core :as rf]))


(defn show-comments [i]
  (let [comments (rf/subscribe [:comments i])]
    ;; need to add a button which allows the user to add a comment
    (into [:p {:class "card-text"}] (for [c @comments] 
                                      [:div [:h3 c]
                                            [:button  {:class "btn btn-default" 
                                                       :on-click #(rf/dispatch [:remove-comment c])} 
                                             "x"]]))))

(defn show-keywords [i]
  (let [kws (rf/subscribe [:keywords i])]
    ;; need to add a button which allows the user to add a keyword
    (into [:p {:class "card-subtitle mb-2 text-muted"}] (for [k @kws] [:h5 k]))))

;; each bit of data, with the comments and keywords are going
;; to be in a card.

;; the card title will be the idea
;; the card subtitle wil be the keywords
;; and the text will be the comments about an idea
(defn show-all-ideas []
   (let [db (rf/subscribe [:ideas])]
    (into [:div {:class "row"}] 
          (for [i @db] 
               [:div {:class "col-sm-6"}
                [:div {:class "card"}
                 [:div {:class "card-body"}
                  [:h5 {:class "card-title"} i]
                  (show-comments i)
                  [:button  {:class "btn btn-default" :on-click #(rf/dispatch [:remove-idea i])} 
                   "x"]]]]))))
