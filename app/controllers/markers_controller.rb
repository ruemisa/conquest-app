class MarkersController < ApplicationController

  def create 
    markers = Marker.create!(marker_params)
  end

  private 

  def marker_params 
    params.require(:marker).permit(:lat, :lng, :user_id)
  end 
end
