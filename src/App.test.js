import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./App";

test("Renders the BookingForm heading", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );
  const headingElement = screen.getByText("Book a Table");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns the expected default time slots", () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
  expect(times).toContain("17:00");
});

test("updateTimes returns updated time slots on dispatch", () => {
  const state = ["17:00"];
  const newState = updateTimes(state, { type: "UPDATE_TIMES", date: "2026-11-15" });
  expect(newState).toContain("18:30");
});

test("Displays validation error when submitting empty name", () => {
  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );
  const submitButton = screen.getByText("Make Your Reservation");
  fireEvent.click(submitButton);
  expect(screen.getByText("Full name is required.")).toBeInTheDocument();
});