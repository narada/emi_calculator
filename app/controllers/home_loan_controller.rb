class HomeLoanController < ApplicationController
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token, :only => [:calculator]

  def index
  end

  def calculator
    p params
    result = HomeLoanServices::process(params[:amount].to_i, params[:tenure].to_i, params[:rate].to_f)
    p result
    render json: {amount: result[:total], insurance: result[:insurance]}
  end

  private

  def loan_params
    params.require(:loan).permit(:amount, :tenure, :rate)
  end
end
