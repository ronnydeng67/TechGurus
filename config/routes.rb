Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:show, :create, :destroy]
    resources :carts, only: [:index, :show, :update, :destroy, :create]
    resources :items, only: [:index, :show] do
      resources :reviews, only: [:index, :show, :update, :destroy, :create]
    end
    delete :destroy_cart, controller: "carts"
  end

  get '*path', to: "static_pages#frontend_index"
end
