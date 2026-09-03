"use client";

import styles from "@/styles/scss/theme/Inbox.module.scss";
import { InboxData } from "@/data/InboxData";
import { useState } from "react";
import {
  Arrow90degLeft,
  Arrow90degRight,
  CardImage,
  ChatLeftDots,
  EmojiSmile,
  Envelope,
  EnvelopeExclamation,
  Justify,
  JustifyLeft,
  JustifyRight,
  Link45deg,
  PencilSquare,
  PlusLg,
  Send,
  Star,
  Trash3,
  TypeBold,
  TypeItalic,
  TypeUnderline,
} from "react-bootstrap-icons";
import { Col, Container, Image, Row } from "react-bootstrap";

export default function Inbox() {
  const [selectedMail, setSelectedMail] = useState(InboxData[0]);

  return (
    <Container fluid className={styles.bgContainer}>
      <Row className={styles.container}>
        {/* LEFT SIDEBAR */}
        <Col lg={2} className={styles.sidebar}>
          <div>
            <div className={styles.newBtn}>
              {" "}
              New Message{" "}
              <span>
                <PlusLg />
              </span>
            </div>

            <ul>
              <li className={styles.active}>
                <span className={styles.icnClr}>
                  <Envelope />{" "}
                </span>{" "}
                Inbox
              </li>
              <li>
                <span className={styles.icnClr}>
                  <Star />{" "}
                </span>{" "}
                Starred
              </li>
              <li>
                <span className={styles.icnClr}>
                  <Send />{" "}
                </span>{" "}
                Sent
              </li>
              <li>
                <span className={styles.icnClr}>
                  <PencilSquare />{" "}
                </span>{" "}
                Drafts
              </li>
              <li>
                <span className={styles.icnClr}>
                  <EnvelopeExclamation />
                </span>{" "}
                Spam
              </li>
              <li>
                <span className={styles.icnClr}>
                  <Trash3 />{" "}
                </span>{" "}
                Trash
              </li>
            </ul>
          </div>
        </Col>

        {/* MIDDLE LIST */}
        <Col lg={4} className={styles.mailList}>
          <div>
            <div className={styles.mailTop}>
              <input
                type="text"
                placeholder="Search..."
                className={styles.search}
              />
              <p>
                <Envelope /> 1,500 Total Messages
              </p>
            </div>

            {InboxData.map((mail) => (
              <div
                key={mail.id}
                className={`${styles.mailItem} ${
                  selectedMail.id === mail.id ? styles.selected : ""
                }`}
                onClick={() => setSelectedMail(mail)}
              >
                <h4>{mail.name}</h4>
                <p className={styles.subject}>{mail.subject}</p>
                <p className={styles.preview}>{mail.message}</p>
                <span className={styles.time}>{mail.time}</span>
              </div>
            ))}
          </div>
        </Col>

        {/* RIGHT CONTENT */}
        <Col lg={6} className={styles.mailContent}>

          <div className={styles.topContent}>

            <div className={styles.topContentLeft}>
              <Image src="https://i.pravatar.cc/40" alt="user" />
              <div>
                <h5>{selectedMail.name}</h5>
                <p className={styles.topEmail}>{selectedMail.email}</p>
              </div>
            </div>

            <div className={styles.topContentRight}>
              <span className={styles.txtLight}>Mar 12, 2035 – 09:45 AM</span>
              {/* <br/> */}
              <div>
              <span className={styles.txtLight}>Guest Inquiry</span> {" "}
              <span><Arrow90degLeft/> Reply <Arrow90degRight/> Forward</span>
              </div>
            </div>
          </div>

          <div className={styles.bottomContent}>
            <p className={styles.subject}>{selectedMail.subject}</p>
            {/* <p className={styles.meta}>From: {selectedMail.name}</p> */}

            <div className={styles.body}>{selectedMail.message}</div>

            <span className={styles.ty}>Thank you</span><br/>
            <span className={styles.subject}>{selectedMail.name}</span><br/>
            <span  className={styles.body}>Room 210 – Deluxe Suite</span><br/>
            <br/>
            
            <div className={styles.textarea}>
              <div className="d-flex justify-content-between align-items-center mb-1">
                <div>
                  To: {selectedMail.name}
                </div>
            
                <div>
                  CC BC
                </div>
              </div>
              <br/>

              <div className={styles.filter}>
                Aa <TypeItalic/> <TypeBold/> <TypeUnderline/> <JustifyLeft/> <Justify/> <JustifyRight/> | <Link45deg/> <EmojiSmile/> <CardImage/>
              </div>

              <br/>
              <input type="text" placeholder="Type Something" className={styles.iptArea}/>
            
            <br/>
            <br/>
            <button className={styles.sendBtn}>Send Message</button>
            </div>


          </div>
        </Col>
      </Row>
    </Container>
  );
}
