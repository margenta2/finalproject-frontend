import React from "react";
import {Link, Route} from "react-router-dom";

const Glossary = () => {
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
            <div className="main-body">
                <div className="content glossary-content">
                    <h1>Glossary</h1>
                    <p id="glossary-header">This glossary lists commonly used terms in the Jehovah's Witness (JW) and ex-Jehovah's Witness (ex-JW) community. The definitions reflect the meaning within this community. </p>
                    <div className="list-parent glossary-list">
                        <ul>
                            <li><strong>Apostate</strong>
                                <p>Jehovah's Witnesses define an apostate as anyone who rejects the teachings of the Watchtower group. The secular definition is anyone who abandons their former beliefs.</p>
                            </li>
                            <li><strong>ARC (Australian Royal Commission)</strong>
                                <p>The ARC investigated how institutions like schools and churches responded to allegations and instances of child sexual abuse. There were 1006 alleged perpetrators of child sexual abuse within the Jehovah's Witness congregation. None of these instances were reported to the authorities by the Jehovah's Witnesses.</p>
                            </li>
                            <li><strong>Armageddon</strong>
                                <p>An impending event that will destroy all non-JWs on the planet.</p>
                            </li>
                            <li><strong>Babylon the Great</strong>
                                <p>A term JWs use to describe all other religions which they consider false, especially other Christian religions. A reference from the book of Revelation.</p>
                            </li>
                            <li><strong>Bad Association</strong>
                                <p>Someone who is perceived to be failing to live up to expected standards. This can apply to people inside or outside the congregation. It is often used to refer to friends or family outside of the JW organization.</p>
                            </li>
                            <li><strong>Baptism</strong>
                                <p>When a congregation member wants to formally pledge their life in dedication to the Jehovah's Witness organization they go through a series of questions with elders. Baptism usually doesn't occur until one is old enough to satisfactorily answer a series of questions. If the elders feel the person is qualified they will be approved for baptism. The baptisms take place at regional conventions and circuit assemblies. An approved person is fully dunked under water by two elders. Once one is baptized they are officially considered a Jehovah's Witness and can be disfellowshipped.</p>
                            </li>
                            <li><strong>Bethel</strong>
                                <p>Refers to the world headquarters of the Jehovah's Witnesses located in New York or the JW headquarters in a given country.</p>
                            </li>
                            <li><strong>Brother/Sister</strong>
                                <p>Baptized men and women are referred to as brothers and sisters. A person is usually referred to with brother or sister before their last name. For example, Brother Smith or Sister Jones.</p>
                            </li>
                            <li><strong>Circuit Overseer (CO)</strong>
                                <p>A branch representative and elder who visits an assigned number of congregations or circuit twice a year. During their visit the C.O. will meet with the local elders to review recommendations for appointing or deleting elders and ministerial servants, review congregation records, prepare reports and give special talks to the congregation.</p>
                            </li>
                            <li><strong>Coordinator of the Body of Elders (COBE)</strong>
                                <p>Formerly known as the "presiding overseer". The COBE acts as the chairman of the body of elders in a congregation. He organizes kingdom hall meetings and arranges meetings of elders including those addressing accusations of wrongdoing.</p>
                            </li>
                            <li><strong>CSA</strong>
                                <p>Refers to Child Sexual Abuse. The mishandling of child abuse within the Watchtower organization is the subject of many investigations around the world. </p>
                            </li>
                            <li><strong>Disassociated</strong>
                                <p>A baptized JW is deemed "disassociated" if by their words or actions they are considered to have quit the religion. An individual can write a letter to the congregation indicating their wish to be removed as a member. Certain actions constitute voluntary disassociation. This includes voluntarily accepting a blood transfusion or joining another religion. The penalty for disassociation is shunning by all believing JWs including family members.</p>
                            </li>
                            <li><strong>Disfellowshipped</strong>
                                <p>A baptized JW is disfellowshipped if they are found guilty of "gross sin". "Gross sin" includes things like adultery, fornication, and smoking to name a few. Once someone is disfellowshipped an announcement is made in the local congregation and all other JWs are expected to cut off all contact with the disfellowshipped person. This includes family. If anyone not related to the disfellowshipped person continues contact they can also be disfellowshipped. Once disfellowshipped, a person has to apply for reinstatement to be welcomed back into the congregation. </p>
                            </li>
                            <li><strong>Elder</strong>
                                <p>A man in a position of authority in the congregation, similar to a pastor or minister in a church. There can be multiple elders in one congregation. Elders are responsible for providing pastoral support to congregants, teaching from the platform during church meetings, handling alleged wrongdoing, etc. Elders have power and authority in the lives of congregation members.</p>
                            </li>
                            <li><strong>Field Service</strong>
                                <p>Used to describe the door-to-door preaching activity or other forms of preaching including cart witnessing, letter writing, phone witnessing, etc. Most JWs engage in this preaching work on Saturday or Sunday mornings. They are required to submit a written report of time spend in field service every month to their elder body.</p>
                            </li>
                            <li><strong>Governing Body</strong>
                                <p>A group of men located in the world headquarters in Warwick, NY that direct the entire JW organization. They are considered the spokespeople of God on earth by the JWs.</p>
                            </li>
                            <li><strong>Great Crowd</strong>
                                <p>Anyone who is not deemed to be going to heaven that survives Armageddon and will enter paradise without dying.</p>
                            </li>
                            <li><strong>Judicial Committee</strong>
                                <p>A judicial committee is formed when a baptized JW is determined to be guilty of serious sin or gross sin. They are comprised of three elders, usually from the local congregation.  The purpose of the committee is to determine if the sinner is repentant. The elders meet privately with the wrongdoer and ask many questions regarding the sin and private life of the individual. Once the elders make their decision they inform the "wrongdoer". If deemed unrepentant the person is disfellowshipped. The penalty for disfellowshipping is total shunning by all believing JWs. The "wrongdoer" is able to appeal the decision within 7 days. If appealed, a new judicial committee is formed and they have a new meeting with the individual and make a final decision. If the "wrongdoer" is deemed repentant they are reproved which means they have congregation privileges (ability to comment at meetings/serve as a pioneer) removed but can continue as a congregation member. Judicial committees tend to be very traumatic and elders have been known to abuse their authority.</p>
                            </li>
                            <li><strong>Kingdom Hall</strong>
                                <p> A place of worship for JW congregations where meetings are held weekly. Multiple congregations can be assigned to a single kingdom hall.</p>
                            </li>
                            <li><strong>Ministerial Servant</strong>
                                <p>A position in the congregation below that of an elder. Only men are eligible to be ministerial servants. They are similar to deacons. They perform support services in the congregation including operating audio/visual equipment, literature handling, bookkeeping and giving talks.</p>
                            </li>
                            <li><strong>Pioneer</strong>
                                <p>A baptized JW who pledges to spend 840 hours per year in the preaching work. This is done on a voluntary basis and is unpaid. Men and women who are considered "exemplary" can qualify but must be approved by the elder body to be an official pioneer.</p>
                            </li>
                            <li><strong>Publisher</strong>
                                <p>Someone who is officially recognized by the congregation as qualified to participate in the preaching work. A publisher can be baptized or unbaptized. An individual has to be approved by the body of elders to be considered a publisher.</p>
                            </li>
                            <li><strong>PIMI</strong>
                                <p>Physically In Mentally In. Refers to someone who is an active member of the congregation and believes in it.</p>
                            </li>
                            <li><strong>PIMO</strong>
                                <p>Physically In Mentally Out. When a person is technically a member of the congregation but no longer believes the doctrine. These individuals often pretend to be a JW for personal reasons.</p>
                            </li>
                            <li><strong>POMI</strong>
                                <p>Physically Out Mentally In. Someone who is no longer a member of the group but still believes in the doctrine and will often defend the group.</p>
                            </li>
                            <li><strong>POMO</strong>
                                <p>Physically Out Mentally Out. One who is not in the organization and does not believe in it</p>
                            </li>
                            <li><strong>The Truth</strong>
                                <p>JWs will refer to their doctrine or organization as "the truth".</p>
                            </li>
                            <li><strong>Two Witness Rule</strong>
                                <p> Based on Deuteronomy 19:15. A JW policy that requires at least two witnesses in order to establish that wrongdoing has occurred unless there is an admission of guilt. Jehovah's Witnesses have faced criticism over applying this rule even in the case of child sexual abuse. </p>
                            </li>
                            <li><strong>Watchtower</strong>
                                <p>Also known as The Watchtower Bible and Tract Society  of Pennsylvania. It is the main legal entity of Jehovah's Witnesses and is often used to describe the organization as a whole.</p>
                            </li>
                            <li><strong>Worldly</strong>
                                <p>Refers to anyone who is not in the JW organization. </p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Glossary;