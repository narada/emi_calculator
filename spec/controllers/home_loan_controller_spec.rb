
require 'rails_helper'
# login to http basic auth

RSpec.describe HomeLoanController, type: :controller do

  before(:each) do
    @request.env["HTTP_AUTHORIZATION"] = "Basic " + Base64::encode64("admin:admin")
  end

  describe "GET index" do
    it "returns a successful response" do
      get :index
      expect(response).to be_successful
    end
  end

  describe "POST calculate" do

    it "returns a successful response" do
      @request.env["CONTENT_TYPE"] = 'application/json'
      @request.env["ACCEPT"] = 'application/json'
      params = {amount: 10000, tenure: 12, rate: 10}
      post "calculator", :params => params

      expect(response).to be_successful
    end
  end
end
