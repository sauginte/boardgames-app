import { Range } from "react-range";

type RangeSliderProps = {
  value: number[];
  setValue: (value: number[]) => void;
};

const RangeSlider = ({ value, setValue }: RangeSliderProps) => {
  return (
    <Range
      step={1}
      min={1}
      max={10}
      values={value!}
      onChange={(values) => setValue(values)}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "6px",
            width: "20%",
            backgroundColor: "#ccc",
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props, index }) => (
        <div
          {...props}
          key={props.key}
          style={{
            ...props.style,
            height: "22px",
            width: "22px",
            backgroundColor: "#999",
            borderRadius: "0.4rem",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-30px",
              color: "#000",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "2px 6px",
              borderRadius: "4px",
            }}
          >
            {value[index]}
          </div>
        </div>
      )}
    />
  );
};

export default RangeSlider;
