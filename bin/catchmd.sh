#!/bin/sh

cdir=`pwd`

prodName=(
    "tinper-sparrow"
    "tinper-neoui-grid"
    "neoui-kero"
    "kero"
    "tinper-neoui"
    "tinper-neoui-tree"
)


for name in ${prodName[@]}
do
    case ${name} in

        tinper-sparrow)
            rm -r ./snippets/sparrow/docs/
            cp -r ./node_modules/tinper-sparrow/snippets/ ./snippets/sparrow/docs/
            echo "====抓取 tinper-sparrow 文档成功===="
         ;;
         tinper-neoui-grid)
            rm -r ./snippets/grid/docs/
            cp -r ./node_modules/tinper-neoui-grid/snippets/ ./snippets/grid/docs/
            echo "====抓取 tinper-neoui-grid 文档成功===="
            ;;
         neoui-kero)
             cp -r ./node_modules/neoui-kero/snippets/clockpicker/ ./snippets/neoui-kero/docs/clockpicker
             cp -r ./node_modules/neoui-kero/snippets/combobox_ex/ ./snippets/neoui-kero/docs/combobox_ex
             cp -r ./node_modules/neoui-kero/snippets/currency_ex/ ./snippets/neoui-kero/docs/currency_ex
             cp -r ./node_modules/neoui-kero/snippets/ex_checkbox/ ./snippets/neoui-kero/docs/ex_checkbox
             cp -r ./node_modules/neoui-kero/snippets/ex_checkboxdata/ ./snippets/neoui-kero/docs/ex_checkboxdata
             cp -r ./node_modules/neoui-kero/snippets/ex_datetime/ ./snippets/neoui-kero/docs/ex_datetime
             cp -r ./node_modules/neoui-kero/snippets/ex_month/ ./snippets/neoui-kero/docs/ex_month
             cp -r ./node_modules/neoui-kero/snippets/ex_monthdate/ ./snippets/neoui-kero/docs/ex_monthdate
             cp -r ./node_modules/neoui-kero/snippets/ex_pagination/ ./snippets/neoui-kero/docs/ex_pagination
             cp -r ./node_modules/neoui-kero/snippets/ex_percent/ ./snippets/neoui-kero/docs/ex_percent
             cp -r ./node_modules/neoui-kero/snippets/ex_progress/ ./snippets/neoui-kero/docs/ex_progress
             cp -r ./node_modules/neoui-kero/snippets/ex_radio/ ./snippets/neoui-kero/docs/ex_radio
             cp -r ./node_modules/neoui-kero/snippets/ex_switch/ ./snippets/neoui-kero/docs/ex_switch
             cp -r ./node_modules/neoui-kero/snippets/ex_time/ ./snippets/neoui-kero/docs/ex_time
             cp -r ./node_modules/neoui-kero/snippets/ex_validate/ ./snippets/neoui-kero/docs/ex_validate
             cp -r ./node_modules/neoui-kero/snippets/ex_year/ ./snippets/neoui-kero/docs/ex_year
             cp -r ./node_modules/neoui-kero/snippets/ex_yearmonth/ ./snippets/neoui-kero/docs/ex_yearmonth
             cp -r ./node_modules/neoui-kero/snippets/grid/ ./snippets/neoui-kero/docs/grid
             cp -r ./node_modules/neoui-kero/snippets/gridValidate/ ./snippets/neoui-kero/docs/gridValidate
             cp -r ./node_modules/neoui-kero/snippets/mainChild/ ./snippets/neoui-kero/docs/mainChild
             cp -r ./node_modules/neoui-kero/snippets/module/ ./snippets/neoui-kero/docs/module
             cp -r ./node_modules/neoui-kero/snippets/moduleapi/ ./snippets/neoui-kero/docs/moduleapi
             cp -r ./node_modules/neoui-kero/snippets/textarea/ ./snippets/neoui-kero/docs/textarea
             cp -r ./node_modules/neoui-kero/snippets/textfield/ ./snippets/neoui-kero/docs/textfield
             cp -r ./node_modules/neoui-kero/snippets/tree/ ./snippets/neoui-kero/docs/tree
             echo "====抓取 neoui-kero 文档成功===="
          ;;
        kero)
            cp -r ./node_modules/kero/snippets/arch/ ./snippets/kero/docs/arch
            cp -r ./node_modules/kero/snippets/core/ ./snippets/kero/docs/core
            cp -r ./node_modules/kero/snippets/datatable/ ./snippets/kero/docs/datatable
            cp -r ./node_modules/kero/snippets/dataTableUse/ ./snippets/kero/docs/dataTableUse
            cp -r ./node_modules/kero/snippets/dataTableUseBackend/ ./snippets/kero/docs/dataTableUseBackend
            cp -r ./node_modules/kero/snippets/gettingstarted/ ./snippets/kero/docs/gettingstarted
            cp -r ./node_modules/kero/snippets/install/ ./snippets/kero/docs/install
            cp -r ./node_modules/kero/snippets/knockout/ ./snippets/kero/docs/knockout
            cp -r ./node_modules/kero/snippets/overview/ ./snippets/kero/docs/overview
            cp -r ./node_modules/kero/snippets/row/ ./snippets/kero/docs/row
            cp -r ./node_modules/kero/snippets/udatatable/ ./snippets/kero/docs/udatatable
            cp -r ./node_modules/kero/snippets/validateapi/ ./snippets/kero/docs/validateapi
            echo "====抓取 kero 文档成功===="
        ;;
        tinper-neoui)
        rm -r ./snippets/neoui/component
        rm -r ./snippets/neoui/plugin
           rm -r ./snippets/neoui/global
            cp -r ./node_modules/tinper-neoui/snippets/ ./snippets/neoui/
            echo "====抓取 tinper-neoui 文档成功===="
           ;;
       tinper-neoui-tree)
          cp -r ./node_modules/tinper-neoui-tree/snippets/ ./snippets/neoui/plugin/
          echo "====抓取 tinper-neoui-tree 文档成功===="
          ;;
    esac
done
