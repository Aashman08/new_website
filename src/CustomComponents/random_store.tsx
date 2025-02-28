
const SkeletonOne = () => {
    /**
     * 1) Container tilt variants
     *    - 'initial': no tilt
     *    - 'hover': rotates the card slightly in 3D
     */
    const getRandomAngle = () => Math.random() 
  
    const containerVariants = {
      initial: {
        rotateY: 0,
        rotateX: 0,
        transition: { duration: 0.2 },
      },
      hover: {
      rotateY: getRandomAngle(),
      rotateX: getRandomAngle(),
        transition: { duration: 0.3 },
      },
    };
  
    /**
     * 2) Title, Image, Description variants
     *    - 'initial': start at 0 translation
     *    - 'hover': move forward in 3D (translateZ)
     */
    const titleVariants = {
      initial: {
        translateZ: 0,
        transition: { duration: 0.2 },
      },
      hover: {
        translateZ: 50,
        transition: { duration: 0.2 },
      },
    };
  
    const descriptionVariants = {
      initial: {
        translateZ: 0,
        transition: { duration: 0.2 },
      },
      hover: {
        translateZ: 60,
        transition: { duration: 0.2 },
      },
    };
  
    const imageVariants = {
      initial: {
        translateZ: 0,
        transition: { duration: 0.2 },
      },
      hover: {
        rotateY: +10,
        rotateX: +10,
        translateZ: 100,
        transition: { duration: 0.2 },
      },
    };
  
    return (
      <div
        style={{ perspective: "1000px" }}
        className="inter-var"
      >
        {/* 
          We wrap our content in a motion.div
          - Sets up initial & hover states for the card tilt
          - transformStyle: 'preserve-3d' ensures nested children remain in 3D.
        */}
        <motion.div
          className="
            w-64         /* fixed width of 16rem (256px) */
            h-40          /* fixed height of 12rem (192px) */
            bg-gray-50 relative group/card
            dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]
            dark:bg-black 
            row-span-1 rounded-xl group/bento p-4 border
          "
          style={{
            transformStyle: "preserve-3d",
          }}
          variants={containerVariants}
          initial="initial"
          whileHover="hover"
        >
          {/* Image (translateZ=100 on hover) */}
          <motion.div
            className="w-full mt-4"
            variants={imageVariants}
          >
            <Image
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height={300}
              width={400}
              alt="thumbnail"
              className="
                flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2
              "
            />
          </motion.div>
  
          {/* Title (translateZ=50 on hover) */}
          {/* <motion.div
            className="text-xl font-bold text-neutral-600 dark:text-white"
            variants={titleVariants}
          >
            Make things float in air
          </motion.div> */}
  
          {/* Description (translateZ=60 on hover) */}
          {/* <motion.p
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            variants={descriptionVariants}
          >
            Hover over this card to unleash the power of CSS perspective
          </motion.p> */}
        </motion.div>
      </div>
    );
  };
  