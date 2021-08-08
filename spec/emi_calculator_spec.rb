require "home_loan_services"

describe HomeLoanServices do
  describe "self.process" do
    context "given valid values" do

      it "should return hash" do
        expect(HomeLoanServices::process(10,10,10)).to be_an_instance_of(Hash)
      end

      it "should include keys" do
        result = HomeLoanServices::process(10,10,10)
        expect(result).to have_key(:total)
        expect(result).to have_key(:insurance)
      end

      it "should calculate correct installment" do
        result = HomeLoanServices::process(15100000,60,7)
        expect(result[:total]).to eq(298998)
        expect(result[:insurance]).not_to eq(0)
      end
    end
  end

  context "given invalid parameters" do
    before do
      result = HomeLoanServices.stub(:process) { raise Exception }
    end

    it "should log the exception and return false" do
      expect(result).to  raise_exception()
    end
  end
end
