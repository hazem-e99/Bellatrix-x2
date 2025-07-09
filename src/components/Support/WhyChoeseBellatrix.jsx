import React from "react";

const WhyChoeseBellatrix = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(239, 239, 239)",
        color: "rgb(46, 41, 36)",
        fontSize: "15px",
        lineHeight: "24px",
        fontFamily: '"Gotham A", "Gotham B"',
        width: "100%",
        padding: "60px 0",
        margin: "0px",
      }}
    >
      <div
        style={{
          maxWidth: "1220px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Title */}
        <div
          style={{
            width: "100%",
            padding: "0 15px 40px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontWeight: "700",
              fontSize: "32px",
              lineHeight: "42px",
              textAlign: "center",
              letterSpacing: "-1px",
              color: "rgb(0, 0, 0)",
              margin: "0 0 20px",
            }}
          >
            Why Choose Bellatrix for Support?
          </h2>
        </div>

        {/* Content Container */}
        <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
          {/* Left Column: Text + List + Quote */}
          <div
            style={{
              flex: "1",
              padding: "0 15px",
            }}
          >
            <p style={{ 
              marginBottom: "25px", 
              fontSize: "16px", 
              lineHeight: "26px",
              color: "rgb(46, 41, 36)"
            }}>
              At Bellatrix, we strive to offer the highest level of quality
              when it comes to our solutions. Over the years, we have mastered the
              ins and outs of NetSuite. We've worked with companies in multiple
              verticals and are familiar with their best practices.
            </p>

            <ul style={{ 
              paddingLeft: "0", 
              marginBottom: "30px",
              listStyle: "none"
            }}>
              <li style={{
                position: "relative",
                paddingLeft: "25px",
                marginBottom: "12px",
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgb(46, 41, 36)"
              }}>
                <span style={{
                  position: "absolute",
                  left: "0",
                  top: "8px",
                  width: "8px",
                  height: "8px",
                  backgroundColor: "rgb(206, 34, 50)",
                  borderRadius: "50%"
                }}></span>
                18 years of experience
              </li>
              <li style={{
                position: "relative",
                paddingLeft: "25px",
                marginBottom: "12px",
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgb(46, 41, 36)"
              }}>
                <span style={{
                  position: "absolute",
                  left: "0",
                  top: "8px",
                  width: "8px",
                  height: "8px",
                  backgroundColor: "rgb(206, 34, 50)",
                  borderRadius: "50%"
                }}></span>
                85 NetSuite Consultants
              </li>
              <li style={{
                position: "relative",
                paddingLeft: "25px",
                marginBottom: "12px",
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgb(46, 41, 36)"
              }}>
                <span style={{
                  position: "absolute",
                  left: "0",
                  top: "8px",
                  width: "8px",
                  height: "8px",
                  backgroundColor: "rgb(206, 34, 50)",
                  borderRadius: "50%"
                }}></span>
                800 Active Customers
              </li>
              <li style={{
                position: "relative",
                paddingLeft: "25px",
                marginBottom: "12px",
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgb(46, 41, 36)"
              }}>
                <span style={{
                  position: "absolute",
                  left: "0",
                  top: "8px",
                  width: "8px",
                  height: "8px",
                  backgroundColor: "rgb(206, 34, 50)",
                  borderRadius: "50%"
                }}></span>
                2500+ Completed Projects
              </li>
            </ul>

            <blockquote
              style={{
                borderLeft: "4px solid rgb(206, 34, 50)",
                padding: "20px 25px",
                margin: "0",
                fontSize: "17px",
                fontStyle: "italic",
                backgroundColor: "#fff",
                borderRadius: "0 8px 8px 0",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
              }}
            >
              <p
                style={{
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                  fontSize: "16px",
                  lineHeight: "26px",
                  margin: 0,
                  color: "rgb(46, 41, 36)"
                }}
              >
                <span style={{ fontSize: "18px" }}>
                  Don't take our word for it, check our{" "}
                  <strong>
                    <a
                      href="/testimonials"
                      target="_blank"
                      rel="noopener"
                      style={{
                        color: "rgb(206, 34, 50)",
                        textDecoration: "none",
                        transition: "all 0.3s ease-in-out",
                        borderBottom: "1px solid transparent"
                      }}
                      onMouseOver={(e) => {
                        e.target.style.borderBottom = "1px solid rgb(206, 34, 50)";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.borderBottom = "1px solid transparent";
                      }}
                    >
                      client page
                    </a>
                  </strong>{" "}
                  to see how we supported, helped, and guided NetSuite users to
                  success.
                </span>
              </p>
            </blockquote>
          </div>

          {/* Right Column: Image */}
          <div
            style={{
              flex: "1",
              padding: "0 15px",
            }}
          >
            <img
              alt="Industry Leaders"
              src="/images/indleaders.jpg"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "400px",
                objectFit: "cover",
                verticalAlign: "middle",
                display: "block",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoeseBellatrix;
