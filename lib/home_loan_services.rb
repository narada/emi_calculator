module HomeLoanServices
  def self.process(loan, time, rate)
    begin
      rate = rate.to_f/100
      i = (1+rate/12)**(12/12)-1
      annuity = (1-(1/(1+i))**time)/i
      payment = loan/annuity

      result         = {}
      result[:total]  = payment.to_i
      result[:insurance] = 20000

      return result
    rescue Exception => e
      Rails.logger.info e.to_s
    end
  end
end
