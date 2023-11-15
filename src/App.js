import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import SiriImage from "./images/siri.png";
import CortanaImage from "./images/cortana.png";
import "../node_modules/bulma/css/bulma.css";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Asistants!</p>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Amazon Alexa, also known simply as Alexa, is a virtual assistant technology largely based on a Polish speech synthesizer named Ivona, bought by Amazon in 2013. "
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Cortana is a discontinued virtual assistant developed by Microsoft, that uses the Bing search engine to perform tasks such as setting reminders and answering questions for the user. "
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                description="Siri is the digital assistant that is part of Apple Inc.'s iOS, iPadOS, watchOS, macOS, tvOS, audioOS, and visionOS operating systems. "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
