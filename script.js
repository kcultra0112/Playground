function calculate() {
    const frontGear = parseInt(document.getElementById("frontGear").value);
    const rearGear = parseInt(document.getElementById("rearGear").value);
    const wheelDiameter = parseFloat(document.getElementById("wheelDiameter").value);
    
    if (isNaN(frontGear) || isNaN(rearGear) || isNaN(wheelDiameter)) {
        document.getElementById("result").innerText = "Please enter valid values for all fields.";
        return;
    }
    
    const gearRatio = frontGear / rearGear;
    const gearInches = gearRatio * wheelDiameter;
    
    document.getElementById("result").innerText = `Gear Ratio: ${gearRatio.toFixed(2)}, Gear Inches: ${gearInches.toFixed(2)}`;
}
