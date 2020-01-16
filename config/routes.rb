Rails.application.routes.draw do
  devise_for :users
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  get 'form/index'
  get 'chart/index'
  get 'table/index'
  root :to => 'home#index'
  get 'home/index'
end
