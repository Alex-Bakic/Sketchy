(ns sketchy.core
  (:require [clojure.string :as string]
            [reagent.core :as r]
            [alandipert.storage-atom :refer [local-storage]]))

;; The db
(def app-state
  (local-storage (r/atom
    {:ideas []})))

;; db functions
(defn update-ideas! [f & args]
  (apply swap! app-state update-in [:ideas] f args))

(defn add-idea! [i]
  (update-ideas! conj i))

(defn remove-idea! [i]
  (update-ideas! (fn [is]
                      (vec (remove #(= % i) is)))
                    i))

;; UI components (views)
(defn show-idea [i]
  [:li
   [:span i]
   [:button {:on-click #(remove-idea! i)} 
    "Delete"]])

(defn new-idea []
  (let [val (r/atom "")]
    (fn []
      [:div
       [:input {:type "text"
                :placeholder "Enter some ideas you have"
                :value @val
                :on-change #(reset! val (-> % .-target .-value))}]
       [:button {:on-click #(when-let [i @val]
                              (add-idea! i)
                              (reset! val ""))}
        "Add"]])))

(defn ideas-list []
  [:div
   [:h1 "All of your ideas"]
   [:ul
    (for [i (:ideas @app-state)]
      [contact i])]
   [new-idea]])

;; Render the root component
;; "root" is the id of the div that holds all the 
(defn start []
  (r/render-component 
   [ideas-list]
(.getElementById js/document "root")))
