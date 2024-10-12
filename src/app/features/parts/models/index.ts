export interface Part {
    id: number
    designation: string
    partNumber: string
    chronoList?: ChronoList
}

export type PartList = Part[]
export type ChronoList = PartChrono[]
export type ChronoSteps = ChronoStep[]
export interface PartChrono {
    id: number
    /**
     * @description date de début du chrono
     */
    startDate: Date

    /**
     * @description date de fin du chrono
     */
    endDate: Date
    /**
     * @description durée total du chrono en milliseconds
     */
    totalDuration: number

    steps: ChronoSteps
}

export interface ChronoStep {
    id: number
    /**
 * @description date de début de la step
 */
    startDate: Date

    /**
     * @description date de fin de la step
     */
    endDate: Date

    /**
     * @description Texte décrivant l'étape mesurée
     */
    description: string

    photos: PhotoList
}

export type PhotoList = Photo[]
export interface Photo {

}