Rails.application.routes.draw do
    resources :apartments
    devise_for :users
  
    get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
    root to: 'home#index'
end


