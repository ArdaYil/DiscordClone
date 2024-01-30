class Arrays {
  private constructor() {}

  public arrayFromRange(max: number, min: number) {
    const array = [];

    for (let i = max; i >= min; i--) array.push(i);

    return array;
  }

  public static getArrays() {
    return new Arrays();
  }
}

export default Arrays.getArrays();
