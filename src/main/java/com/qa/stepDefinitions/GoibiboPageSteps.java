package com.qa.stepDefinitions;

import com.qa.pages.GoibiboPage;
import com.qa.util.TestBase;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class GoibiboPageSteps extends TestBase{
	GoibiboPage goibibopage = new GoibiboPage();
	
	@Given("^I launch Goibibo website$")
	public void i_open_browser() throws Throwable {
	    TestBase.initialization();
	}

	@Then("^I validate Goibibo Page title$")
	public void i_validate_Goibibo_Page_title() throws Throwable {
	   String title = goibibopage.validateGoibiboPageTitle();
	   Assert.assertEquals("Goibibo - Best Travel Website. Book Hotels, Flights, Trains, Bus and Cabs with upto 50% off", title);
	}
	
	
	@When("^I Select any one option\\( Oneway ,Roundtrip,Multi City\\)$")
	public void i_Select_any_one_option_Oneway_Roundtrip_Multi_City() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^I Select From & Destination$")
	public void i_Select_From_Destination() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^I Select the Departure date - future Date$")
	public void i_Select_the_Departure_date_future_Date() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^I Select the traveller details and travel class$")
	public void i_Select_the_traveller_details_and_travel_class() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^I Search for the cheapest price$")
	public void i_Search_for_the_cheapest_price() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^I click on Book now button$")
	public void i_click_on_Book_now_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^I Review the selection in the review page$")
	public void i_Review_the_selection_in_the_review_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}


	
}
