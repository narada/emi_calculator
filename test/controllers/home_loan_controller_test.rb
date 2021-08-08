require 'test_helper'

class HomeLoanControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get home_loan_index_url
    assert_response :success
  end

  test "should get calculator" do
    get home_loan_calculator_url
    assert_response :success
  end

end
