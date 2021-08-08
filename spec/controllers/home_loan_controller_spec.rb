require 'spec_helper'

RSpec.describe HomeLoanController, type: :controller do
  describe "GET index" do
    it "returns a successful response" do
      get :index
      expect(response).to be_successful
    end
  end

  describe "POST calculate" do
    it "returns a successful response" do
      post :calculate
      expect(response).to be_successful
    end
  end
end
