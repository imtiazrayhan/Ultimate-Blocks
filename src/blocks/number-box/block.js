/**
 * BLOCK: number-box
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//Import Icon
import icon from './icons/icon';

//  Import CSS.
import './style.scss';
import './editor.scss';

const {__} = wp.i18n; // Import __() from wp.i18n
const {
    registerBlockType,
    InspectorControls,
    AlignmentToolbar,
    ColorPalette,
    BlockControls,
    RichText
} = wp.blocks; // Import registerBlockType() from wp.blocks

const {
    PanelBody,
    Toolbar,
    RangeControl,
    PanelColor,
    SelectControl,
    withState
} = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('ub/number-box', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __('Number Box'), // Block title.
    icon: icon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
    category: 'formatting', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    keywords: [
        __('Number box'),
        __('Feature'),
        __('Columns'),
    ],
    attributes: {
        column: {
            type: 'select',
            default: '2'
        },
        columnOneNumber: {
            type: 'array',
            source: 'children',
            selector: '.ub_number_one_number',
            default: '1'
        },
        columnTwoNumber: {
            type: 'array',
            source: 'children',
            selector: '.ub_number_two_number',
            default: '2'
        },
        columnThreeNumber: {
            type: 'array',
            source: 'children',
            selector: '.ub_number_three_number',
            default: '3'
        },
        columnOneTitle: {
            type: 'array',
            source: 'children',
            selector: '.ub_number_one_title',
            default: 'Title One'
        },
        columnTwoTitle: {
            type: 'array',
            source: 'children',
            selector: '.ub_number_two_title',
            default: 'Title Two'
        },
        columnThreeTitle: {
            type: 'array',
            source: 'children',
            selector: '.ub_number_three_title',
            default: 'Title Three'
        },
        columnOneBody: {
            type: 'array',
            source: 'children',
            selector: '.ub_number_one_body',
            default: 'Gutenberg is really awesome! Ultimate Blocks makes it more awesome!'
        },
        columnTwoBody: {
            type: 'array',
            source: 'children',
            selector: '.ub_number_two_body',
            default: 'Gutenberg is really awesome! Ultimate Blocks makes it more awesome!'
        },
        columnThreeBody: {
            type: 'array',
            source: 'children',
            selector: '.ub_number_three_body',
            default: 'Gutenberg is really awesome! Ultimate Blocks makes it more awesome!'
        },
        numberBackground: {
            type: 'string',
            default: '#CCCCCC'
        },
        numberColor: {
            type: 'string',
            default: '#000000'
        },
        borderColor: {
            type: 'string',
            default: '#CCCCCC'
        }
    },

    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     *
     * The "edit" property must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    edit: withState({editable: 'content',})(function (props) {

            const {
                isSelected,
                editable,
                setState
            } = props;

            const {
                column,
                columnOneNumber,
                columnTwoNumber,
                columnThreeNumber,
                columnOneTitle,
                columnTwoTitle,
                columnThreeTitle,
                columnOneBody,
                columnTwoBody,
                columnThreeBody,
                numberBackground,
                numberColor,
                borderColor
            } = props.attributes;

            const columns = [
                {value: '1', label: __('One Column')},
                {value: '2', label: __('Two Column')},
                {value: '3', label: __('Three Column')},
            ];

            const onSetActiveEditable = (newEditable) => () => {
                setState({editable: newEditable})
            };

            return [

                isSelected && (
                    <BlockControls key="controls"/>
                ),

                isSelected && (
                    <InspectorControls key={'inspector'}>

                        <SelectControl
                            label={__('Column Number')}
                            value={column}
                            options={columns.map(({value, label}) => ({
                                value: value,
                                label: label,
                            }))}
                            onChange={(value) => {
                                props.setAttributes({column: value})
                            }}
                        />

                        <PanelColor
                            title={__('Number Background Color')}
                            colorValue={numberBackground}
                            initialOpen={false}
                        >
                            <ColorPalette
                                value={numberBackground}
                                onChange={(colorValue) => props.setAttributes({numberBackground: colorValue})}
                                allowReset
                            />
                        </PanelColor>

                        <PanelColor
                            title={__('Number Color')}
                            colorValue={numberColor}
                            initialOpen={false}
                        >
                            <ColorPalette
                                value={numberColor}
                                onChange={(colorValue) => props.setAttributes({numberColor: colorValue})}
                                allowReset
                            />
                        </PanelColor>

                        <PanelColor
                            title={__('Border Color')}
                            colorValue={borderColor}
                            initialOpen={false}
                        >
                            <ColorPalette
                                value={borderColor}
                                onChange={(colorValue) => props.setAttributes({borderColor: colorValue})}
                                allowReset
                            />
                        </PanelColor>

                    </InspectorControls>
                ),

                <div key={'editable'} className={props.className}>
                    <div className={`ub_number_box column_${column}`}>
                        <div
                            className="ub_number_1"
                            style={{
                                borderColor: borderColor
                            }}
                        >
                            <div
                                className="ub_number_box_number"
                                style={{
                                    backgroundColor: numberBackground,
                                }}
                            >
                                <RichText
                                    tagName="p"
                                    className="ub_number_one_number"
                                    style={{
                                        color: numberColor
                                    }}
                                    value={columnOneNumber}
                                    onChange={(value) => props.setAttributes({columnOneNumber: value})}
                                    isSelected={isSelected && editable === 'number_one'}
                                    onFocus={onSetActiveEditable('number_one')}
                                    keepPlaceholderOnFocus={true}
                                />
                            </div>
                            <RichText
                                tagName="p"
                                className="ub_number_one_title"
                                value={columnOneTitle}
                                onChange={(value) => props.setAttributes({columnOneTitle: value})}
                                isSelected={isSelected && editable === 'title_one'}
                                onFocus={onSetActiveEditable('title_one')}
                                keepPlaceholderOnFocus={true}
                            />
                            <RichText
                                tagName="p"
                                className="ub_number_one_body"
                                value={columnOneBody}
                                onChange={(value) => props.setAttributes({columnOneBody: value})}
                                isSelected={isSelected && editable === 'body_one'}
                                onFocus={onSetActiveEditable('body_one')}
                                keepPlaceholderOnFocus={true}
                            />
                        </div>
                        <div
                            className="ub_number_2"
                            style={{
                                borderColor: borderColor
                            }}
                        >
                            <div
                                className="ub_number_box_number"
                                style={{
                                    backgroundColor: numberBackground,
                                }}
                            >
                                <RichText
                                    tagName="p"
                                    className="ub_number_two_number"
                                    style={{
                                        color: numberColor
                                    }}
                                    value={columnTwoNumber}
                                    onChange={(value) => props.setAttributes({columnTwoNumber: value})}
                                    isSelected={isSelected && editable === 'number_two'}
                                    onFocus={onSetActiveEditable('number_two')}
                                    keepPlaceholderOnFocus={true}
                                />
                            </div>
                            <RichText
                                tagName="p"
                                className="ub_number_two_title"
                                value={columnTwoTitle}
                                onChange={(value) => props.setAttributes({columnTwoTitle: value})}
                                isSelected={isSelected && editable === 'title_two'}
                                onFocus={onSetActiveEditable('title_two')}
                                keepPlaceholderOnFocus={true}
                            />
                            <RichText
                                tagName="p"
                                className="ub_number_two_body"
                                value={columnTwoBody}
                                onChange={(value) => props.setAttributes({columnTwoBody: value})}
                                isSelected={isSelected && editable === 'body_two'}
                                onFocus={onSetActiveEditable('body_two')}
                                keepPlaceholderOnFocus={true}
                            />
                        </div>
                        <div
                            className="ub_number_3"
                            style={{
                                borderColor: borderColor
                            }}
                        >
                            <div
                                className="ub_number_box_number"
                                style={{
                                    backgroundColor: numberBackground,
                                }}
                            >
                                <RichText
                                    tagName="p"
                                    className="ub_number_three_number"
                                    style={{
                                        color: numberColor
                                    }}
                                    value={columnThreeNumber}
                                    onChange={(value) => props.setAttributes({columnThreeNumber: value})}
                                    isSelected={isSelected && editable === 'number_three'}
                                    onFocus={onSetActiveEditable('number_three')}
                                    keepPlaceholderOnFocus={true}
                                />
                            </div>
                            <RichText
                                tagName="p"
                                className="ub_number_three_title"
                                value={columnThreeTitle}
                                onChange={(value) => props.setAttributes({columnThreeTitle: value})}
                                isSelected={isSelected && editable === 'title_three'}
                                onFocus={onSetActiveEditable('title_three')}
                                keepPlaceholderOnFocus={true}
                            />
                            <RichText
                                tagName="p"
                                className="ub_number_three_body"
                                value={columnThreeBody}
                                onChange={(value) => props.setAttributes({columnThreeBody: value})}
                                isSelected={isSelected && editable === 'body_three'}
                                onFocus={onSetActiveEditable('body_three')}
                                keepPlaceholderOnFocus={true}
                            />
                        </div>
                    </div>
                </div>
            ];
        },
    ),

    /**
     * The save function defines the way in which the different attributes should be combined
     * into the final markup, which is then serialized by Gutenberg into post_content.
     *
     * The "save" property must be specified and must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    save: function (props) {

        const {
            column,
            columnOneNumber,
            columnTwoNumber,
            columnThreeNumber,
            columnOneTitle,
            columnTwoTitle,
            columnThreeTitle,
            columnOneBody,
            columnTwoBody,
            columnThreeBody,
            numberBackground,
            numberColor,
            borderColor
        } = props.attributes;

        return (
            <div className={props.className}>
                <div className={`ub_number_box column_${column}`}>
                    <div
                        className="ub_number_1"
                        style={{
                            borderColor: borderColor
                        }}
                    >
                        <div
                            className="ub_number_box_number"
                            style={{
                                backgroundColor: numberBackground,
                            }}
                        >
                            <p
                                className="ub_number_one_number"
                                style={{
                                    color: numberColor
                                }}
                            >
                                {columnOneNumber}
                            </p>
                        </div>
                        <p className="ub_number_one_title">{columnOneTitle}</p>
                        <p className="ub_number_one_body">{columnOneBody}</p>
                    </div>
                    <div
                        className="ub_number_2"
                        style={{
                            borderColor: borderColor
                        }}
                    >
                        <div
                            className="ub_number_box_number"
                            style={{
                                backgroundColor: numberBackground,
                            }}
                        >
                            <p
                                className="ub_number_two_number"
                                style={{
                                    color: numberColor
                                }}
                            >
                                {columnTwoNumber}
                            </p>
                        </div>
                        <p className="ub_number_two_title">{columnTwoTitle}</p>
                        <p className="ub_number_two_body">{columnTwoBody}</p>
                    </div>
                    <div
                        className="ub_number_3"
                        style={{
                            borderColor: borderColor
                        }}
                    >
                        <div
                            className="ub_number_box_number"
                            style={{
                                backgroundColor: numberBackground,
                            }}
                        >
                            <p
                                className="ub_number_three_number"
                                style={{
                                    color: numberColor
                                }}
                            >
                                {columnThreeNumber}
                            </p>
                        </div>
                        <p className="ub_number_three_title">{columnThreeTitle}</p>
                        <p className="ub_number_three_body">{columnThreeBody}</p>
                    </div>
                </div>
            </div>
        );
    },
});