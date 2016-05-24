class SessionsController < ApplicationController

	def new
	end

	# Sign In
	def create
		auth = request.env['omniauth.auth']
		# Go look in DB for user with that provider and uid. If they don't exist yet, create them.
		user = User.find_by(provider: auth['provider'], uid: auth['uid']) || User.create_with_omniauth(auth)
		# Set session[:user_id]
		session[:user_id] = user.id

		redirect_to root_url, notice: "Welcome, #{user.name}."
	end

	# Sign Out
	def destroy
		session[:user_id] = nil

		redirect_to root_url, notice: "You've left us! Bye Felicia!"
	end
end