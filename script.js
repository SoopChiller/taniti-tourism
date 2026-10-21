
document.addEventListener("DOMContentLoaded", () => {

  // Activity information

  const activityData = {
    beaches: {
      title: "Taniti Beaches",
      description:
        "Visit the sandy beaches around Yellow Leaf Bay, near Taniti City.",
      location: "Yellow Leaf Bay",
      booking:
        "Public beach visits do not require a booking through this prototype. Check local guidance for specific beach activities."
    },

    rainforest: {
      title: "Rainforest Adventures",
      description:
        "Plan a rainforest hike or explore zip-lining opportunities.",
      location: "Taniti rainforest",
      booking:
        "For organized activities such as zip-lining, ask a local activity operator about schedules, pricing, and reservations. This prototype does not connect to an operator."
    },

    volcano: {
      title: "Volcano Sightseeing",
      description:
        "Explore the mountainous interior and learn about the island's active volcano. Verify current access and safety conditions before visiting.",
      location: "Mountainous interior",
      booking:
        "For a guided visit, check directly with a local tour operator about availability and booking. This prototype does not process reservations."
    }
  };

  // Activity details panel

  const details = document.getElementById("activity-details");

  function addElement(parent, tag, content) {
    const element = document.createElement(tag);
    element.textContent = content;
    parent.appendChild(element);
    return element;
  }

  // Handle activity card clicks

  document.querySelectorAll(".activity-button").forEach(button => {

    button.addEventListener("click", () => {
      const activity = activityData[button.dataset.activity];

      if (!activity) return;

      details.replaceChildren();

      addElement(details, "h3", activity.title);
      addElement(details, "p", activity.description);
      addElement(details, "p", `Location: ${activity.location}`);

      // Clear booking information

      addElement(details, "h3", "Booking Information");
      addElement(details, "p", activity.booking);

      // Transportation link

      const transport = addElement(
        details,
        "a",
        "View Transportation Options"
      );

      transport.href = "#transportation";
      transport.className = "button secondary";

      // Close details button

      const close = addElement(details, "button", "Close Details");

      close.type = "button";
      close.className = "button";

      close.addEventListener("click", () => {
        details.hidden = true;
        button.focus();
      });

      // Display the selected activity

      details.hidden = false;
      details.focus();
    });
  });

  // Lodging information toggle

  const lodgingToggle = document.getElementById("lodging-toggle");
  const lodgingDetails = document.getElementById("lodging-details");

  lodgingToggle.addEventListener("click", () => {
    lodgingDetails.hidden = !lodgingDetails.hidden;

    lodgingToggle.setAttribute(
      "aria-expanded",
      String(!lodgingDetails.hidden)
    );

    lodgingToggle.textContent = lodgingDetails.hidden
      ? "View Lodging & Booking Info"
      : "Hide Lodging & Booking Info";
  });

});
