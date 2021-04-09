class ApartmentsController < ApplicationController
    def index
        apts = Apartment.all
        render json: apts
     end

     def create
        apt = Apartment.create(apt_params)
        if apt.valid?
         render json: apt
        else
         render json: apt.errors, status: 422
        end
     end

     def update
      apt = Apartment.find(params[:id])
      apt.update(apt_params)
      if apt.valid?
       render json: apt
      else
       render json: apt.errors, status: 422
      end
    end

    def destroy
        apt = Apartment.find(params[:id])
        apt.destroy
        if apt.valid?
          render json: apt
        else
          render json: apt.errors, status: :unprocessable_entity
        end
    end

    private
    def apt_params
        params.require(:apartment).permit(:street, :city, :city, :state, :price, :bedrooms, :bathrooms, :pets, :user_id)
    end
end

