import React from "react";
import  {Link, Route} from "react-router-dom";

const About = () => {
    return (
        <div>
            <div  className="navbar">
                <Link to="/">Home</Link>
                <Link to="/posts">Message Board</Link>
                <div className="dropdown">
                    <button className="dropbtn">Menu
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/about">About</Link>
                        <Link to="/beliefs">Beliefs</Link>
                        <Link to="/deprogram">De-Programming</Link>
                        <Link to="/mentalhealth">Mental Health</Link>
                        <Link to="/socialsupport">Social Support</Link>
                        <Link to="/humor">Humor</Link>
                        <Link to="/glossary">Glossary of Terms</Link>
                    </div>
                </div>
            </div>


            <div className="about-body main-body">
                <div className="content">
                    <h1>About XRC</h1>

                    <div className="about-content body-content">
                        <h3>Who is this resource center for?</h3>
                        <p>This resource center is designed for anyone who wants to learn more about ex-Jehovah's Witnesses(ex-JWs). This includes ex-Jehovah's Witnesses , current Jehovah's Witnesses who are thinking about leaving the group or those who have friends or family who are an ex or current Jehovah's Witness. This site has information on mental health support, social support, and de-programming for anyone who has left the group and needs help with coping and re-claiming their mind. You can also find information on common JW terms and beliefs. If there are any topics you'd like more information on you can create a post on our message board. </p>
                    </div>

                    <div className="about-content body-content">
                        <h3>Who are Jehovah's Witnesses?</h3>
                        <p>Jehovah's Witnesses (or JWs) are a millennialist Christian denomination that was founded during the 19th-century Adventist movement in the United States by Charles Taze Russell. The group has approximately 8.7 million followers worldwide. They are directed by a Governing Body located in Warwick, New York. They are also referred to as The Watchtower Bible and Tract Society. They believe Armageddon is imminent and that God's kingdom is the only solution for all problems faced by humanity. They are best known for their door-to-door preaching. They do not take part in military service and do not vote. They do not celebrate holidays including Christmas, birthdays, Easter or Halloween. They consider secular society to be morally corrupt and under the influence of Satan and admonish all members to limit interaction with non-Witnesses. If a member commits what they consider a serious sin it can result in their expulsion or disfellowshipping. A baptized member who chooses to leave is considered disassociated. Disfellowshipped or disassociated individuals are shunned by others in the organization including family. Their policies on the handling of child sexual abuse has also faced criticism and has been the subject of formal inquiries. </p>
                    </div>

                    <div className="about-content about-list">
                        <h3>Are Jehovah's Witnesses a cult?</h3>
                        <p>	A cult is a group or movement held together by a shared commitment to a charismatic leader or ideology. It has a belief system that has the answers to all of life’s questions and offers a special solution to be gained only by following the leader’s rules. It requires a high level of commitment from at least some of the members.</p>
                        <p>Jehovah's Witnesses state that they are not a cult. However, they have been identified as a cult by several cult experts including Anthony Hoekema, Ron Rhodes, Alan W. Gomes, J. Jordon Melton and Steven Hassan.</p>
                        <p>The book <em>Combatting Cult Mind Control</em> by Steven Hassan presents the BITE method as a simple way to test if a group is a cult and engaged in persuasive coercion. BITE stands for Behavior Control, Information Control, Thought Control and Emotional Control. These are some examples of these control techniques that Watchtower uses.</p>
                        <ul><h4>Behavior Control</h4>
                            <li>Major time commitment required for indoctrination sessions and group rituals. JWs are required to attend two congregation meetings each week and participate in door-to-door preaching work every week. They are also encouraged to engage in daily study of Watchtower materials and a weekly family worship session.</li>
                            <li>Individualism discouraged; "group think" prevails. Group members are told to bring their thinking in line with principles outlined by the Watchtower. They are told to put on the "new personality" which eliminates individuality.</li>
                            <li>Rigid rules and regulations. If a group member disobeys rules they are shunned.</li>
                        </ul>
                        <ul><h4>Information Control</h4>
                            <li>Use of deception and deliberately holding back information.</li>
                            <li>Access to non-cult sources of information minimized or discouraged. JWs are told to only do research in Watchtower produced materials.</li>
                            <li>Compartmentalization of information; Outsider vs. Insider doctrines. JWs have many doctrines that aren't discussed publicly but are well known to group members.</li>
                            <li>Spying and reporting on other members. Group members are encouraged to tell the elders if they suspect another member of committing a sin. This includes those within one's own family.</li>
                        </ul>
                        <ul><h4>Thought Control</h4>
                            <li>Need to internalize the group's doctrine as "Truth".</li>
                            <li>Black and White thinking - Good vs. Evil, us vs. them, inside vs. outside.</li>
                            <li>Only "good" and "proper" thoughts are encouraged.</li>
                            <li>No critical questions about leadership, doctrine or policy is seen as legitimate.</li>
                            <li>No alternative belief systems viewed as legitimate, good or useful.</li>
                        </ul>
                        <ul><h4>Emotional Control</h4>
                            <li>Make a person feel that if there are ever any problems, it is always their fault, never the group's or leader's. This includes excessive use of guilt or fear.</li>
                            <li>Inculcating irrational fears about ever leaving the group or even questioning leadership authority. </li>
                            <li>Shunning of leave takers; fear of being rejected by friends, peers and family. Anyone who leaves is labeled as "weak" or "undisciplined".</li>
                        </ul>
                    </div>
                </div>

                </div>
            

        </div>
    )
}

export default About;