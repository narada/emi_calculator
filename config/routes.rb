Rails.application.routes.draw do
  get 'home_loan/index'
  get 'home_loan/calculator'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
end
