<h1>TickTocker</h1>

<h2>Description</h2>
This is a web app that has been developed for each Line of Business (LOB) in YouTube TV - TVPO with the goal of streamlining and enhancing the process of tracking and recording task utilizations. This project consists of a form interface specifically designed for monitoring and documenting various activities associated with video-on-demand (VOD) tasks. The primary objective of the form is to simplify the tracking and documentation of VOD-related activities, ensuring that all pertinent information is recorded accurately and easily exported to google sheets for client reporting.
<br />
<br />

<p align="center">
<img src="https://github.com/MAmojica/TickTocker/assets/78264218/1a99a67e-725b-422d-bc82-69fcc9d616fc" height="65%" width="65%" alt="Youtube TV Training Team - Attendance Web App"/>

</p>
<h2>Languages and tools Used</h2>

- <b>Google Sheets:</b> database
- <b>Apps Scripts (frontend and backend):</b> HTML, CSS & Javascript

<h2>Process Flowchart</h2>

<p align="center">
<img src="https://github.com/MAmojica/TickTocker/assets/78264218/d4c44e42-1d57-41e3-b9b9-8fcb5d68b6e1" alt="Image Analysis Dataflow"/>
</p>


<h3>1. Start</h3>
- The workflow begins.

<h3>2. Display current date</h3>
- The app displays the current date.

<h3>3. Display current user email</h3>
- The app shows the current user's email address.

<h3>4. Note on inputs and timer</h3>
- Inputs are validated, and the timer starts when the user clicks the "Start" button.

<h3>5. Validate required fields</h3>
The app checks if the following required fields are filled in:
<h4>Shift Date:</h4> The date of the work shift.
<h4>Sub-Activity:</h4> The specific activity being performed.
<h4>Network/League:</h4> The network or league associated with the task.

<h3>6. Check if required fields are filled</h3>
<h4>Yes:</h4> If the required fields are filled, proceed to start the timer and enable the "Stop" button.
<h4>No:</h4> If the required fields are not filled, display an error message and stop the process.

<h3>7. Start Timer</h3>
- Begin timing the task once the required fields are validated.

<h3>8. Enable Stop button</h3>
- Enable the "Stop" button for the user to click once they are done with the task.

<h3>9. User performs tasks</h3>
- The user carries out their tasks while the timer is running.

<h3>10. User clicks Stop button</h3>
- When the user finishes their task, they click the "Stop" button.

<h3>11. Confirm submission</h3>
- The app asks the user to confirm if they want to submit their data.

<h3>12. User confirms?</h3>
<h4>Yes:</h4> If the user confirms, proceed to validate the inputs again.
<h4>No:</h4> If the user does not confirm, return to the task and continue.

<h3>13. Validate inputs again</h3>
- Ensure that all inputs are still valid before finalizing the submission.

<h3>14. Inputs valid?</h3>
<h4>Yes:</h4> If the inputs are valid, proceed to the next steps.
<h4>No:</h4> If the inputs are invalid, display an error message and stop the process.

<h3>15. Stop Timer</h3>
- Stop the timer to record the elapsed time for the task.

<h3>16. Calculate elapsed time</h3>
Determine the total time spent on the task.

<h3>17. Format and prepare data</h3>
- Organize and format the data for submission.

<h3>18. Send data to Google Sheets</h3>
- Submit the prepared data to Google Sheets for record-keeping.

<h3>19. Display success message</h3>
- Inform the user that their data has been successfully submitted.

<h3>20. Reset Timer</h3>
- Reset the timer for any future tasks.

<h3>21. Clear input fields</h3>
- Clear the input fields to allow the user to enter new data for the next task.

<h3>22. Stop</h3>
- The process ends.
  
<!--
 ```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```
--!>
