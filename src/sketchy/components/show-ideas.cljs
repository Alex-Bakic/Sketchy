(ns sketchy.components.show-ideas
  (:require [sketchy.components.show-keywords :refer [show-all-keywords]]
            [sketchy.components.add-keywords :refer [add-keyword]]
            [sketchy.components.show-comments :refer [show-all-comments]]
            [re-frame.core :as rf]
            [reagent.core :as r]))


;; show the card for each idea

;; each bit of data, with the comments and keywords are going
;; to be in a card.
;; the card title will be the idea
;; the card subtitle wil be the keywords
;; and the text will be the comments about an idea
(defn show-idea [id idea]
  [:div {:class "col-sm-6"}
                 [:div {:class "card"}
                  [:div {:class "card-body"}
                   [:h3 {:class "card-title"} 
                    (str idea "  ")
                    [:button  {:class "btn btn-default" :on-click #(rf/dispatch [:remove-idea id])}
                     [:i {:class "fas fa-minus"}]]]
                   [:h6 {:class "card-subtitle mb-1 text-muted"} ""]
                   
                   ;; part for the add - and - show keywords views
                   [show-all-keywords id]
                   [add-keyword id idea]

                   ;; part for the add - and - show comments views
                   [show-all-comments id]]]])

;; keywords will be card subtitles , will be a tiny input field where you can add them and press enter to
;; replace the input field with the new card subtitle.

(defn show-all-ideas []
  (let [db (rf/subscribe [:db])]
    (into [:div {:class "row"}] 
          (map #(vector show-idea %1 %2) 
               (keys @db) 
               (map :idea (vals @db))))))
