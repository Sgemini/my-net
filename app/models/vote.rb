class Vote < ApplicationRecord
  belongs_to :cate
  belongs_to :article
end
