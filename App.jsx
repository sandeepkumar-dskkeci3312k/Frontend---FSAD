import React, { useState } from react;
import .App.css;

const App = () = {
  const [responses, setResponses] = useState({
    anxiety ,
    eyeContact ,
    publicSpeaking ,
    questionAvoidance ,
  })

  const handleChange = (event) = {
    setResponses({ ...responses, [event.target.name] event.target.value });
  }

  const handleSubmit = (event) = {
    event.preventDefault();
    console.log(Survey Responses, responses);
    alert(Thank you for submitting your responses!);
  }

  return (
    div className=container
      h1Social Sprout 🌱h1
      h2Social Anxiety Surveyh2
      form onSubmit={handleSubmit}
        { Question 1 }
        labelHow anxious do you feel when introducing yourself to a grouplabel
        select name=anxiety onChange={handleChange} required
          option value=Select an optionoption
          option value=extremely lowExtremely Lowoption
          option value=lowLowoption
          option value=moderateModerateoption
          option value=highHighoption
          option value=extremely highExtremely Highoption
        select

        { Question 2 }
        labelHow likely are you to avoid eye contact during conversationslabel
        select name=eyeContact onChange={handleChange} required
          option value=Select an optionoption
          option value=extremely lowExtremely Lowoption
          option value=lowLowoption
          option value=moderateModerateoption
          option value=highHighoption
          option value=extremely highExtremely Highoption
        select

        { Question 3 }
        labelHow uncomfortable do you feel when speaking in publiclabel
        select name=publicSpeaking onChange={handleChange} required
          option value=Select an optionoption
          option value=extremely lowExtremely Lowoption
          option value=lowLowoption
          option value=moderateModerateoption
          option value=highHighoption
          option value=extremely highExtremely Highoption
        select

        { Question 4 }
        labelHow often do you avoid asking questions in a group settinglabel
        select name=questionAvoidance onChange={handleChange} required
          option value=Select an optionoption
          option value=extremely lowExtremely Lowoption
          option value=lowLowoption
          option value=moderateModerateoption
          option value=highHighoption
          option value=extremely highExtremely Highoption
        select

        button type=submitSubmitbutton
      form
    div
  )
}

export default App;
