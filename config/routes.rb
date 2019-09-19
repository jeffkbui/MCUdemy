Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, except: [:index] do
      # resources :carts, only: [:show]
      # resources :wishlists, only: [:show]
    end

    resource :session, only: [:show, :create, :destroy]
    resources :courses, only: [:index, :show]
    resources :lectures, only: [:show, :index]
    #   resources :reviews
  end
end