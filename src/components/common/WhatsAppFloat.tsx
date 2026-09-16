const WHATSAPP_NUMBER = "918136897787";
const WHATSAPP_MESSAGE = "Onam Offer";

const WhatsAppFloat = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="wa-float"
      >
        {/* Pulse rings */}
        <span className="wa-ring wa-ring-1" />
        <span className="wa-ring wa-ring-2" />

        {/* Green circle with white WhatsApp icon */}
        <span className="wa-btn">
          {/* Official WhatsApp white icon on green bg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="wa-svg"
          >
            <circle cx="16" cy="16" r="16" fill="#25D366" />
            <path
              fill="#fff"
              d="M16.002 7.2c-4.855 0-8.8 3.944-8.8 8.8 0 1.552.406 3.01 1.117 4.272L7.2 24.8l4.644-1.218a8.755 8.755 0 0 0 4.158 1.056h.003c4.854 0 8.795-3.944 8.795-8.8 0-2.35-.913-4.558-2.571-6.219A8.742 8.742 0 0 0 16.002 7.2zm0 16.107a7.29 7.29 0 0 1-3.718-1.02l-.267-.158-2.763.724.737-2.697-.174-.276a7.27 7.27 0 0 1-1.115-3.88c0-4.017 3.266-7.283 7.283-7.283a7.24 7.24 0 0 1 5.153 2.134 7.238 7.238 0 0 1 2.13 5.152c-.003 4.02-3.27 7.304-7.266 7.304zm3.992-5.462c-.218-.109-1.29-.636-1.49-.71-.2-.072-.345-.109-.49.11-.145.218-.562.71-.689.855-.127.145-.254.163-.472.054a5.944 5.944 0 0 1-2.97-2.596c-.224-.385.224-.357.64-1.189.072-.145.036-.272-.018-.381-.054-.109-.49-1.18-.672-1.616-.178-.424-.359-.363-.49-.37a8.73 8.73 0 0 0-.418-.007c-.145 0-.381.054-.581.272-.2.218-.762.745-.762 1.816 0 1.07.78 2.105.889 2.25.109.145 1.534 2.34 3.72 3.285 1.383.597 1.926.647 2.617.545.42-.063 1.29-.527 1.471-1.036.181-.508.181-.943.127-1.034-.052-.09-.197-.145-.415-.254z"
            />
          </svg>
        </span>

        {/* Tooltip */}
        <span className="wa-tooltip">Chat with us</span>
      </a>

      <style>{`
        .wa-float {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          text-decoration: none;
          animation: waBounceIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s both;
        }

        .wa-float:hover .wa-tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
          pointer-events: auto;
        }

        /* Main button */
        .wa-btn {
          position: relative;
          z-index: 2;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 24px rgba(37,211,102,0.5), 0 2px 8px rgba(0,0,0,0.14);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }

        .wa-float:hover .wa-btn {
          transform: scale(1.11);
          box-shadow: 0 10px 32px rgba(37,211,102,0.65), 0 4px 12px rgba(0,0,0,0.16);
        }

        .wa-svg {
          width: 58px;
          height: 58px;
          display: block;
        }

        /* Pulse rings */
        .wa-ring {
          position: absolute;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.3);
          width: 58px;
          height: 58px;
          animation: waPulse 2.5s ease-out infinite;
        }
        .wa-ring-1 { animation-delay: 0s; }
        .wa-ring-2 { animation-delay: 0.9s; }

        /* Tooltip */
        .wa-tooltip {
          position: absolute;
          right: 70px;
          top: 50%;
          transform: translateY(-50%) translateX(8px);
          background: #1a1a1a;
          color: #fff;
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          padding: 6px 13px;
          border-radius: 8px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          box-shadow: 0 2px 12px rgba(0,0,0,0.18);
        }
        .wa-tooltip::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-left-color: #1a1a1a;
        }

        @keyframes waPulse {
          0%   { transform: scale(1);    opacity: 0.65; }
          80%  { transform: scale(1.9);  opacity: 0; }
          100% { transform: scale(1.9);  opacity: 0; }
        }

        @keyframes waBounceIn {
          0%   { opacity: 0; transform: scale(0.3) translateY(40px); }
          100% { opacity: 1; transform: scale(1)   translateY(0); }
        }
      `}</style>
    </>
  );
};

export default WhatsAppFloat;
