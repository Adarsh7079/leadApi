import { useEffect } from "react";

const WhatsAppWidget = ({ whatsappdata }) => {
  
  useEffect(() => {
    // Remove existing WhatsApp button to prevent duplicates
    const existingWidget = document.getElementById("custom-wa-button");
    if (existingWidget) {
      existingWidget.remove();
    }

    // Load the script dynamically
    const script = document.createElement("script");
    script.src =
      "https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js";
    script.async = true;
    document.body.appendChild(script);

    // WhatsApp button settings
    const wa_btnSetting = {
      btnColor: "#16BE45", // WhatsApp green color
      ctaText: "", // Hide text, show only icon
      cornerRadius: 40,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      btnPosition: "right",
      whatsAppNumber: "+919999416316",
      welcomeMessage: whatsappdata.welcomeMessage,
      zIndex: 999999,
      btnColorScheme: "light",
    };

    // Initialize WhatsApp widget after script loads
    script.onload = () => {
      if (window._waEmbed) {
        window._waEmbed(wa_btnSetting);
        addShakeAnimation(); // Add shake animation to the icon
      }
    };

    return () => {
      // Cleanup: Remove script on unmount
      document.body.removeChild(script);
    };
  }, [whatsappdata]);

  // Function to add shake animation to the WhatsApp icon
  const addShakeAnimation = () => {
    setTimeout(() => {
      const waIcon = document.querySelector(
        "div[style*='z-index: 999999'] img" // Target the WhatsApp icon inside the widget
      );
      if (waIcon) {
        waIcon.classList.add("wa-icon-shake");
      }
    }, 1500); // Delay to ensure widget has loaded
  };

  return (
    <style>
      {`
        /* Shake Animation */
        @keyframes shake {
          0%, 100% { transform: rotate(0); }
          25% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }

        /* Apply animation only to the WhatsApp icon */
        .wa-icon-shake {
          animation: shake 0.6s ease-in-out infinite alternate;
        }
      `}
    </style>
  );
};

export default WhatsAppWidget;
