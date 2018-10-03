class Marker < ApplicationRecord
  belongs_to :user, optional: true
end
