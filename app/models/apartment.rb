class Apartment < ApplicationRecord
    belongs_to :user
    validates :street, :city, :state, :price, :bedrooms, :bathrooms, :pets, presence: true
end
